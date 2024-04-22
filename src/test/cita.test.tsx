import { cleanup } from "@testing-library/react";
import { render  } from "../test-utils";
import user from '@testing-library/user-event';
import Cita from "../features/quote/Cita";
import exp from "constants";

describe('Cita', () => { 
    test('should display a random quote after clicking the "obtener cita aleatoria" button', async() => {
        render(<Cita></Cita>)
        user.setup()
        const GET_RANDOM_QUOTE_BUTTON = screen.findByRole('button', { name: /obtener cita aleatoria/i} )
        await user.click(GET_RANDOM_QUOTE_BUTTON)
        const QUOTE_TEXT = screen.findByText(/no se encontro ninguna cita/i)
        expect(QUOTE_TEXT).not.toBeNull()
    });

    test('should render input "author Cita "', () => {
        render(<Cita></Cita>)
        const INPUT_NAME =screen.getByRole('textbox', {name: /author cita/i})
        expect(INPUT_NAME).toBeTheDocument()
    });

    test('input should have the given value', async () => {
        user.setup()
        render(<Cita></Cita>)
        const INPUT_NAME = screen.getByRole('textbox', {name: /author cita/i})
        await user.type(INPUT_NAME, 'Homer')
        expect(INPUT_NAME).toHaveValue('Homer')
    });

    test('should display an error message if the given name is not valid', async() => {
        user.setup()
        render(<Cita></Cita>)
        const INPUT_NAME = screen.getByRole('textbox', {name:/author cita/i})
        await user.type(INPUT_NAME, '123')
        const GET_RANDOM_QUOTE_BUTTON = screen.getByRole('button', {name:/obtener cita/i})
        await user.click(GET_RANDOM_QUOTE_BUTTON)
        const errorMessage = await screen.findByText(/por favor ingrese un nombre válido/i,{},{timeout: 3000})
        expect(errorMessage).toBeInTheDocument()
    });

    test('should display a testing quote after giving a valid name', async() => {
        user.setup()
        render(<Cita></Cita>)
        const INPUT_NAME_VALUE = 'Homer'
        const INPUT_NAME =  screen.getByRole('textbox', {  name: /author cita/i})
        await user.type(INPUT_NAME, INPUT_NAME_VALUE)
        expect(INPUT_NAME).toHaveValue(INPUT_NAME_VALUE)
        const GET_RANDOM_QUOTE_BUTTON = screen.getByRole('button', { name: /obtener cita/i})
        await user.click(GET_RANDOM_QUOTE_BUTTON)
        const TESTING_QUOTE = await screen.findByText(/this is a testing quote/i,{},{timeout: 2000})
        expect(TESTING_QUOTE).toBeInTheDocument()
    });

    test('should delete the given value and quote after clicking "borrar" button', async() => {
        user.setup()
        render(<Cita></Cita>)
        const INPUT_NAME_VALUE = 'Homer'
        const INPUT_NAME = screen.getByRole('textbox', {  name: /author cita/i})
        await user.type(INPUT_NAME, INPUT_NAME_VALUE)
        const GET_RANDOM_QUOTE_BUTTON = screen.getByRole('button', { name: /obtener cita/i})
        await user.click(GET_RANDOM_QUOTE_BUTTON)
        const DELETE_BUTTON = screen.getByRole('button', { name: /borrar/i})
        await user.click(DELETE_BUTTON)
        const QUOTE_TEXT = screen.queryByText(/no se encontro ninguna cita/i)
        expect(QUOTE_TEXT).toBeInTheDocument()
    })

    afterEach(() => {
        cleanup()
    })
})
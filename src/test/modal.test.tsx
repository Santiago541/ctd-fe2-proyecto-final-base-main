import user from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { INoticiasNormalizadas } from '../features/news/Noticias';
import Modal from '../features/news/Modal';

const FAKE_DATA_FOR_MODAL = (premium: boolean): INoticiasNormalizadas => {
    return {
        id: 0,
        titulo:"testing Modal",
        descripcion:"this is a test for a modal",
        fecha: "0/00/00",
        esPremium: premium,
        imagen: "", 
    }
}

const setModal = jest.fn();

describe('Modal', ()  => {
    test("should render news' title'", () => {
        render(<Modal modal={FAKE_DATA_FOR_MODAL(false)} setModal={setModal}/>);
        const title = screen.getByRole('heading', {name: /testing modal/i})
        expect(title).toBeInTheDocument()
    })
    test("should render subscription advert is the modal is premium", async() => {
        render(<Modal modal={FAKE_DATA_FOR_MODAL(true)} setModal={setModal}/>)
        const title = await screen.findByRole("heading",{name: /Suscríbete a nuestro Newsletter/i})
        expect(title).toBeInTheDocument()
    })
    test('should call the "setModel" function correctly', async() => {
        render(<Modal modal={FAKE_DATA_FOR_MODAL(false)} setModal={setModal}/>)
        await user.click(screen.getByRole('img', {  name: /close-button/i}))
        expect(setModal).toHaveBeenCalled()  
    })
})
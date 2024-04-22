import { render, screen } from "@testing-library/react";
import Noticias from "../features/news/Noticias";
import user from '@testing-library/user-event';

describe('News', () => {
    test("should render 3 news", async() => {
        render(<Noticias />);
        const news = await screen.findAllByRole('heading', { level: 3 })
        expect(news).toHaveLength(3)
    })
    test('should render modal after clicking "ver mas" button', async() => {
        render(<Noticias />);
        const button = await screen.findByTestId("showMoreButton-1")  
        expect(button).toBeInTheDocument()
        await user.click(button)
        const modalImage = await screen.findByRole('img', {  name: /news-image/i})
        expect(modalImage).toBeInTheDocument()
    })
    test('should render subscription modal when user is not premium', async() => {
        render(<Noticias />);
        const button = await screen.findByTestId("showMoreButton-3") 
        await user.click(button) 
        const subscribeButton = screen.getByRole('button', {  name: /suscríbete/i})
        expect(subscribeButton).toBeInTheDocument()
    })
})
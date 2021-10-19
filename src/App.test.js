import { render, screen } from '@testing-library/react';

import Galeria from './components/Galeria'
import Footer from './components/Footer'
import Header from './components/Header'


describe("<Galeria />", () => {
    it('should have a main tag', () => {
        render(<Galeria/>)
        expect(screen.getByTestId('main-tag')).toBeInTheDocument()
    });

    it('should have 3 photos in the doc if u need put more img come in app.test line 14', () => {
        render(<Galeria />)
        expect(screen.queryAllByRole('img')).toHaveLength(3)
    })

    it('should have five divs', () => {
        render(<Galeria />)
        expect(screen.queryAllByTestId('my-div')).toHaveLength(5)
    })
})

describe('<Footer />', () => {
    it('should have the h(*) title', () => {
        render(<Footer />)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })

    it('should find one text', () => {
        render(<Footer />)
        expect(screen.queryByText('As mais belas imagens')).toBeInTheDocument()
    })
})

describe('<Header />', () => {
    it('should have the two a tags', () => {
        render(<Header />)
        expect(screen.getAllByRole('link')).toHaveLength(2)
    })

    it('should have a header tag in the doc', () => {
        render(<Header />)
        expect(screen.getByTestId('header')).toBeInTheDocument()
    })
})

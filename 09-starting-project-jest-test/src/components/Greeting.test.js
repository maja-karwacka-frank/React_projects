import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting component', () => {
	test('renders Hello as a text', () => {
		// Arrange, given
        render(<Greeting />);

		// Act, when
		// ... nothing

		// Assert, then
		const helloElement = screen.getByText('Hello!');
		expect(helloElement).toBeInTheDocument();
	});
});

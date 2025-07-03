import { render } from '@testing-library/react';
jest.mock('react-chartjs-2', () => ({ Doughnut: () => null }));
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});
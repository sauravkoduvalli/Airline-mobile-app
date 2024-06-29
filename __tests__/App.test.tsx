import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('<App/> component', () => {
  test('<App/> should render correctly', () => {
    render(<App/>)
  })
})
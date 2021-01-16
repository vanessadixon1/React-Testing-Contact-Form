import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

//component import
import App from './App'
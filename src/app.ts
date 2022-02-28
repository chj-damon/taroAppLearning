import { PropsWithChildren } from 'react';
import './app.css';

export default function App(props: PropsWithChildren<any>) {
  return props.children;
}

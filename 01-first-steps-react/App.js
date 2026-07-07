import { useState } from 'react';
import MyButton from './Button'; // { publicVariable, MyButton }
import { useRef, useState } from 'react';
import { TextField, Button, TextFieldProps } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '@/utils/muiTheme';
import styles from './dimitri.module.css';
import Title from '@/components/text/title'; // => export default function Title() { ...


export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}



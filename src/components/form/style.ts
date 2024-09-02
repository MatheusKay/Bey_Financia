import styled from 'styled-components'
import { Colors } from '../../Styles/global'

export const HeaderTitle = styled.div`
  h1 {
    font-size: 1.8em;
  }

  h2 {
    margin: 0.7em 0 0.6em;
    font-size: 1.4em;
  }
`

export const FormSection = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  .erro {
    border: 1px solid red;
  }
`

export const InputForm = styled.input`
  padding: 1.2em;
  margin-bottom: 1.3em;
  border: none;
  border-radius: 0.6em;
  color: rgba(${Colors.black}, 0.6);
  background-color: rgba(${Colors.black}, 0.25);
  font-size: 0.8em;
`

export const ButtonConfirm = styled.button`
  padding: 1.4em;
  margin-top: 1em;
  border: none;
  border-radius: 0.6em;
  text-align: center;
  background-color: rgb(${Colors.black});
  color: rgb(${Colors.white});
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
`

export const InfosSection = styled.section`
  width: 100%;
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5em;
  font-size: 0.9em;

  .quest_privacy {
    display: flex;
    align-items: center;
    column-gap: 0.5em;

    input[type='checkbox'] {
      width: 20px;
      height: 20px;
      position: relative;
      appearance: none;
      cursor: pointer;

      &: hover::before {
        background-color: rgb(${Colors.black});
      }

      &: before {
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        background-color: rgba(${Colors.black}, 0.25);
        border-radius: 6px;
        transition: background-color 1s ease;
      }

      &: checked::before {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 9px;
        background-color: rgb(${Colors.black});
        color: rgb(${Colors.white});
        content: 'X';
        transition: background-color 1s ease-out;
      }
    }
  }
`

import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Erro } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [estaFocado, setEstaFocado] = useState(false);
  const [estaPreenchido, setEstaPreenchido] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setEstaFocado(true);
  }, []);

  const hadleInputBlur = useCallback(() => {
    setEstaFocado(false);

    // !! tranforma o valor em booleano indicando se tem valor ele seta como true...
    setEstaPreenchido(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      temErro={!!error}
      estaPreenchido={estaPreenchido}
      estaFocado={estaFocado}
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={hadleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Erro title={error}>
          <FiAlertCircle color="#aa2929" size={20} />
        </Erro>
      )}
    </Container>
  );
};

export default Input;

import { Fragment, FC } from 'react';
interface ListOptionProps {
  getOption: (value: string) => void;
}

const ListOption: FC<ListOptionProps> = ({ getOption }) => {
  return (
    <Fragment>
      <ul className="container_options">
        <li onClick={() => getOption('Solteiro')}>Solteiro</li>
        <span className="line_option"></span>
        <li onClick={() => getOption('Casado')}>Casado</li>
        <span className="line_option"></span>
        <li onClick={() => getOption('Divorciado')}>Divorciado</li>
        <span className="line_option"></span>
        <li onClick={() => getOption('Namorando')}>Namorando</li>
        <span className="line_option"></span>
        <li onClick={() => getOption('Preocupado')}>Preocupado</li>
      </ul>
    </Fragment>
  );
};
export default ListOption;

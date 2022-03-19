import mock from 'common/assets/images/mock.jpg';
import mock2 from 'common/assets/images/mock2.jpeg';
import mock3 from 'common/assets/images/mock3.jpg';
import mock4 from 'common/assets/images/mock4.jpg';
import mock5 from 'common/assets/images/mock5.jpg';
import mock6 from 'common/assets/images/mock6.jpg';
import mock7 from 'common/assets/images/mock7.jpg';
import IBook from 'models/IBook';

const mockBooks: IBook[] = [
  {
    id: 1,
    name: 'Gestão de riscos com controles internos',
    avaliable: true,
    image: mock,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 2,
    name: 'Ensinando Geografia na educação básica',
    avaliable: false,
    image: mock2,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 3,
    name: 'Outlander - A libélula no âmbar',
    avaliable: false,
    image: mock3,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 4,
    name: 'Quarta capa - O livro sobre livros',
    avaliable: true,
    image: mock4,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 5,
    name: 'Extraordinário',
    avaliable: true,
    image: mock5,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 6,
    name: 'O Código da Vinci',
    avaliable: true,
    image: mock6,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 7,
    name: 'O Priorado de Sião',
    avaliable: true,
    image: mock7,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: 8,
    name: 'A menina que roubava livros',
    avaliable: false,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

export default mockBooks;

export type IProps = {
  image: string;
  text: string;
  languages: (text: string) => void;
};

export type IFooter = {
  languages: (texto: string) => void;
};

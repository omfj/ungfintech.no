interface Props {
  children: string;
}

const Title = ({ children }: Props) => (
  <p className="text-5xl self-start font-bold">{children}</p>
);

export default Title;

/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
  title: string;
}

class Component<T> {
  public props: T; // Забираємо 'public' з оголошення проперті
  constructor(props: T) {
    this.props = props;
  }
}

class Page extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "Title" });
page.pageInfo();

export {};

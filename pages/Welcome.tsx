interface FullName {
    firstName: string;
    lastName: string;
}

export function Welcome(props:FullName) {
    return <h1>Hello, {props.firstName} {props.lastName}</h1>;
  }
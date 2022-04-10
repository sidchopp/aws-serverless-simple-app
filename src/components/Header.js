const Header = () => {
  return (
    <div className="header">
      <h2 >A Simple Form </h2>
      <p>
        It has a{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
        {" "}frontend, which triggers a{" "}
        <a href="https://aws.amazon.com/lambda/" target="_blank" rel="noreferrer">Lambda</a>
        {" "}function when a user submits the form. An{" "}
        <a href="https://aws.amazon.com/api-gateway/" target="_blank" rel="noreferrer">API Gateway</a>
        {" "}is connecting the front-end & back-end, the data( firstname, lastname) submitted by the user is stored in{" "}
        <a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noreferrer">DynamoDB</a>
        {" "}and this App is deployed on{" "}
        <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer"> AWS Amplify</a>.
      </p>
    </div>
  )
}
export default Header;

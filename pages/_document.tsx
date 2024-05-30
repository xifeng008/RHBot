import Document, {
    Head,
    Html,
    Main,
  } from 'next/document';
  
  class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  
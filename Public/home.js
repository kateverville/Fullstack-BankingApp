function Home(){
  return (
    <Card
      txtcolor="info"
      header="Kate's BetterBank"
      bgcolor="light"
      title="Welcome to the Kate's full stack banking experience"
      text="Is your money here? We think we know."
      body={(<img src="badbank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

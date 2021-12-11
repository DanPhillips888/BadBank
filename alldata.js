function AllData() {
    const ctx = React.useContext(UserContext);
    const [currentUserIndex, setCurrentUserIndex] = React.useState(0); //need to have something to change index as requested
    let name = JSON.stringify(ctx.users[currentUserIndex].name);
    let balance = ctx.users[currentUserIndex].balance;

// look into using the spread operator to access each user account

  return (
    <h1>All Data<br/>
      {JSON.stringify(ctx)}<br/>
      {JSON.stringify(currentUserIndex)}<br/>
      Balance of {name} is {balance}<br/>
      {JSON.stringify(ctx.users[currentUserIndex].name)}<br/>
    </h1>
  );
}
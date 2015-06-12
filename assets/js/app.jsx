require(['react', 'jquery', 'jsx!react_components/accounts'], function(React, $, Accounts) {
  console.log($);
  console.log(React);
  console.log(Accounts);

  React.render(<Accounts />, $('#main')[0]);
});

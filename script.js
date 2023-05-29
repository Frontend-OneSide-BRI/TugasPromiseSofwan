const user = [
    { id: 1, username: "sofwan", address: "Jakarta" },
    { id: 2, username: "hidayat", address: "Bandung" },
  ];
  
  const transaction = [
    {
      user_id: 1,
      transaction: [
        { id: 1, status: "selesai" },
        { id: 2, status: "sedang dikirim" },
      ],
    },
    {
      user_id: 2,
      transaction: [
        { id: 1, status: "selesai" },
        { id: 2, status: "batal" },
      ],
    },
  ];
  
  const detailTransaction = [
    { id: 1, id_transction: 1, productName: "Kopi", qty: 3, totalAmount: 20000 },
    { id: 2, id_transction: 1, productName: "Teh", qty: 3, totalAmount: 20000 },
  ];
  
  function login(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = user.filter((e) => e.username === username);
        if (result.length > 0) resolve(result);
        else reject(new Error("Gagal Login Username Salah"));
      }, 1000);
    });
  }
  
  function getTransactions(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = transaction.filter((e) => e.user_id === id);
        if (result.length > 0) resolve(result[0].transaction);
        else reject(new Error("Tidak ada"));
      }, 2000);
    });
  }
  
  async function getTransactionDetails(id) {
    let res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = detailTransaction.filter((e) => e.id_transction === id);
        if (result.length > 0) resolve(result);
        else reject(new Error("Tidak ada"));
      }, 3000);
    });
    return res;
  }
  
  //promise
  login("sofwan")
    .then((user) => {
      console.log(user[0]);
      return getTransactions(user[0].id);
    })
    .then((transactions) => {
      console.log(transactions);
        return getTransactionDetails(transactions[0].id);
    })
    .then((detilTransactions) => {
      console.log(detilTransactions);
    })
    .catch((err) => {
      console.log(err);
    });
  
  //async await
  async function getDetailTransaction(){
      const loginUser = await login("sofwan")
      const transactionUser = await getTransactions(loginUser[0].id)
      const detailTransactionUser = await getTransactionDetails(transactionUser[0].id)
  
      console.log(detailTransactionUser)
  }
  
  getDetailTransaction().catch(
      err =>{
          console.log(err.message)
      }
  )
function find(T, testCases) {
    const cal = (n, target, coins) => {
      let dp = Array(target + 1).fill(0); 
      dp[0] = 1; 
      for (let coin of coins) {
        for (let amount = coin; amount <= target; amount++) {
          dp[amount] += dp[amount - coin];
        }
      }
      return dp[target]; 
    };
    for (let i = 0; i < T; i++) {
      const [n, target] = testCases[i][0];
      const coins = testCases[i][1];
      console.log(cal(n, target, coins));
    }
  }
  const T = 3;
  const testCases = [
    [[3, 13], [5, 2, 4]], 
    [[3, 28], [2, 5, 4]],
    [[4, 28], [1, 2, 4, 5]] 
  ];
  find(T, testCases);
  
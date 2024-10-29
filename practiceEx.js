async function getIceCream() {
    console.log("Waiting for the ice cream...");
    
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Here's your ice cream! 🍦");
      }, 2000); // Wait for 2 seconds
    });
  
    console.log("Yay! Time to eat the ice cream! 🍦");
  }
  
  getIceCream();


  async function orderPizza() {
    try {
      const message = await new Promise((resolve, reject) => {
        const pizzaReady = true;
  
        if (pizzaReady) {
          resolve("Pizza is ready! 🍕");
        } else {
          reject("Pizza failed to cook.");
        }
      });
  
      console.log(message); // "Pizza is ready!"
    } catch (error) {
      console.log(error); // Handles the error if it occurs
    }
  }
  
  orderPizza();
  
  
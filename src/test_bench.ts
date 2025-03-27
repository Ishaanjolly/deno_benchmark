Deno.bench("Math operation", () => {
    // Code to benchmark
    for (let i = 0; i < 1000; i++) {
      Math.sqrt(i);
    }
  });
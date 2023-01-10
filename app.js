const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.post("/hitunggaji", (req, res) => {
  const { employee, komponengaji } = req.body;
  function totalGaji() {
    let total = 0;
    for (let i = 0; i < komponengaji.length; i++) {
      total += komponengaji[i].salary;
    }
    return total;
  }
  const totalSalary = totalGaji();
  if (employee.nationality === "Indonesia") {
    if (employee.marriage === "K1") {
      const nettSalary = totalSalary * 12 - 75;
      if (nettSalary >= 250) {
        const annualTax = 50 * 0.05 + (nettSalary - 50) * 0.15;
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax);
        res.status(200).json({ monthlyTaxIdr });
      } else if (nettSalary >= 50) {
        const annualTax = (nettSalary - 50) * 0.1; // bingung dengan perhitungan pajak untuk nett penghasilan direntang 50-250jt dan dibawah 50jt
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax);
        res.status(200).json({ monthlyTaxIdr });
      } else {
        const annualTax = nettSalary * 0.05;
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax);
        res.status(200).json({ monthlyTaxIdr });
      }
    } else if (employee.marriage === "K0") {
      const nettSalary = totalSalary * 12 - 50;
      if (nettSalary >= 250) {
        const annualTax = 50 * 0.05 + (nettSalary - 50) * 0.15;
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
        res.status(200).json({ monthlyTaxIdr });
      } else if (nettSalary >= 50) {
        const annualTax = (nettSalary - 50) * 0.1; // bingung dengan perhitungan pajak untuk nett penghasilan direntang 50-250jt dan dibawah 50jt
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
        res.status(200).json({ monthlyTaxIdr });
      } else {
        const annualTax = nettSalary * 0.05;
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
        res.status(200).json({ monthlyTaxIdr });
      }
    } else {
      const nettSalary = totalSalary * 12 - 25;
      if (nettSalary >= 250) {
        const annualTax = 50 * 0.05 + (nettSalary - 50) * 0.15;
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
        res.status(200).json({ monthlyTaxIdr });
      } else if (nettSalary >= 50) {
        const annualTax = (nettSalary - 50) * 0.1; // bingung dengan perhitungan pajak untuk nett penghasilan direntang 50-250jt dan dibawah 50jt
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
        res.status(200).json({ monthlyTaxIdr });
      } else {
        const annualTax = nettSalary * 0.05;
        const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
        const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
        res.status(200).json({ monthlyTaxIdr });
      }
    }
  } else {
    if(employee.marriage === "SK") {
        const nettSalary = (totalSalary * 12) - (employee.insurance * 12) - 30;
        if(nettSalary >= 50) {
            const annualTax = (50 * 0.025) + ((nettSalary - 50) * 0.075);
            const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
            const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
            res.status(200).json({ monthlyTaxIdr });
        } else {
            const annualTax = nettSalary * 0.025;
            const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
            const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
            res.status(200).json({ monthlyTaxIdr });
        }
    } else {
        const nettSalary = (totalSalary * 12) - (employee.insurance * 12) - 15;
        if(nettSalary >= 50) {
            const annualTax = (50 * 0.025) + ((nettSalary - 50) * 0.075);
            const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
            const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
            res.status(200).json({ monthlyTaxIdr });
        } else {
            const annualTax = nettSalary * 0.025;
            const monthlyTax = Number((annualTax / 12).toFixed(3)) * 1000000
            const monthlyTaxIdr = new Intl.NumberFormat("id-Id").format(monthlyTax)
            res.status(200).json({ monthlyTaxIdr });
        }
    }
  }
});

app.listen(port, () => {
  console.log(`API listening on port ${port}!`);
});

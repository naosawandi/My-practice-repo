document.getElementById('pricingToggle').addEventListener('change', function() {
    const isYearly = this.checked;
    document.getElementById('billingPeriod').textContent = isYearly ? 'Yearly' : 'Monthly';

    document.getElementById('basicPrice').textContent = isYearly ? '$100/year' : '$10/month';
    document.getElementById('proPrice').textContent = isYearly ? '$200/year' : '$20/month';
    document.getElementById('enterprisePrice').textContent = isYearly ? '$300/year' : '$30/month';
});

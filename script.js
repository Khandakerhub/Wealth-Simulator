function calculate() {
    // 1. Get Inputs
    const P = parseFloat(document.getElementById('p').value) || 0;
    const PMT = parseFloat(document.getElementById('pmt').value) || 0;
    const n_add = parseInt(document.getElementById('add_freq').value);
    const n_div = parseInt(document.getElementById('div_freq').value);
    const y = (parseFloat(document.getElementById('yield').value) || 0) / 100;
    const g = (parseFloat(document.getElementById('growth').value) || 0) / 100;
    const t = parseFloat(document.getElementById('years').value) || 0;

    const r = y + g; // Combined Return Rate
    const totalInvested = P + (PMT * n_add * t);

    // 2. Core Math
    // Adjust PMT if addition frequency differs from compounding frequency
    const pmt_adjusted = PMT * (n_add / n_div); 
    const nt = n_div * t;
    const rn = r / n_div;

    let finalValue = 0;
    if (r === 0) {
        finalValue = totalInvested;
    } else {
        const compoundFactor = Math.pow((1 + rn), nt);
        const principalPart = P * compoundFactor;
        const annuityPart = pmt_adjusted * ((compoundFactor - 1) / rn);
        finalValue = principalPart + annuityPart;
    }

    const netProfitLoss = finalValue - totalInvested;
    const annualNet = t > 0 ? netProfitLoss / t : 0;
    const monthlyNet = annualNet / 12;

    // 3. Update UI
    // Totals
    document.getElementById('res-contrib').innerText = formatCurrency(totalInvested, false);
    document.getElementById('res-total').innerText = formatCurrency(finalValue, false);

    // Performance fields (with color coding)
    updateStatus('res-net', 'card-net', netProfitLoss, true);
    updateStatus('res-annual', 'card-annual', annualNet, true);
    updateStatus('res-monthly', 'card-monthly', monthlyNet, true);
}

function updateStatus(valId, cardId, val, showSigns) {
    const valEl = document.getElementById(valId);
    const cardEl = document.getElementById(cardId);
    
    valEl.innerText = formatCurrency(val, showSigns);
    cardEl.className = 'result-item'; // Reset

    if (val > 0.01) {
        cardEl.classList.add('pos');
        valEl.style.color = 'var(--success)';
    } else if (val < -0.01) {
        cardEl.classList.add('neg');
        valEl.style.color = 'var(--danger)';
    } else {
        valEl.style.color = 'inherit';
    }
}

function formatCurrency(num, showSigns) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        signDisplay: showSigns ? 'always' : 'auto'
    }).format(num);
}

// Initial calculation on load
calculate();
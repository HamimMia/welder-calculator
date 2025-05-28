document.getElementById('calculator').addEventListener('submit', function(e) {
  e.preventDefault();
  const amps = parseFloat(document.getElementById('amps').value);
  const volts = parseFloat(document.getElementById('volts').value);
  const watts = amps * volts;

  document.getElementById('result').textContent = Total Power: ${watts} watts;
});

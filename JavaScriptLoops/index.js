var equations = [];

function AddEquation()
{
	var equationList = document.getElementById("equationList");
	var index = equations.length;
	var leftOp = document.createElement('input');
	leftOp.id = 'leftOp' + index;
	leftOp.type = 'numeric';
	leftOp.value = 0;
	leftOp.addEventListener('change', function() { CalculateResults(index) });
	leftOp.addEventListener('focus', function () { this.select(); })

	var spnX = document.createElement('span');
	spnX.innerHTML = ' x ';

	var rightOp = document.createElement('input');
	rightOp.id = 'rightOp' + index;
	rightOp.type = 'numeric';
	rightOp.value = 0;
	rightOp.addEventListener('change', function() { CalculateResults(index) });
	rightOp.addEventListener('focus', function () { this.select(); })

	var spnE = document.createElement('span');
	spnE.innerHTML = ' = ';

	var result = document.createElement('input');
	result.id = 'result' + index;
	result.type = 'text';
	result.readOnly = true;
	result.value = '0';

	var div = document.createElement('div');
	equationList.appendChild(div);
	div.appendChild(leftOp);
	div.appendChild(spnX);
	div.appendChild(rightOp);
	div.appendChild(spnE);
	div.appendChild(result);

	equations.push({ left: leftOp, right: rightOp, result: result });

	leftOp.focus();
}

function CalculateResults(index)
{
	var min = typeof(index) !== 'number' ? 0 : index;
	var max = typeof(index) !== 'number' ? equations.length - 1 : index;

	for (var i = min; i <= max; i++) {
		var eq = equations[i];
		var leftVal = parseFloat(eq['left'].value);
		var rightVal = parseFloat(eq["right"].value);

		if (!isNaN(leftVal) && !isNaN(rightVal)) {
			eq.result.value = leftVal * rightVal;
		} else {
			eq.result.value = 'Invalid';
		}
	}	
}
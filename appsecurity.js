  function checkAnswer(question, correctOption) {
            var selectedOption = document.querySelector('input[name="' + question + '"]:checked');
            if (selectedOption) {
                var userAnswer = selectedOption.value;
                if (userAnswer === correctOption) {
                    document.getElementById(question + '-result').innerHTML = 'The answer is correct!';
                } else {
                    document.getElementById(question + '-result').innerHTML = 'Incorrect. The correct answer is: ' + correctOption;
                }
            } else {
                document.getElementById(question + '-result').innerHTML = 'Please select an answer.';
            }
        }

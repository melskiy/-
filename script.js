
        const readFiles = (dir) => {
            
            return ['Шпатель Ревердена.jpg', 'Крючки Фарабефа.jpg', 'Распатор.jpg', 'Кусачки Дольгрена.jpg', 'Ножницы Пуговчатые.jpg', 'Скальпель брюшистый.jpg', 'Бельевые цапки.jpg', 'Ножницы Купера.jpg', 'Пила Джигли.jpg', 'Крючки Фолькмана.jpg', 'Пила Джигли с проводником Паленова.jpg', 'Зажим Микулича.jpg', 'Зажим кровоостанавливающий  «Москит».jpg', 'Иглодержатель.jpg', 'Зонд  Пуговчатый.jpg', 'Щипцы Олье и Фарабефа.jpg', 'Печеночная ложечка.jpg', 'Ранорасширитель Госсе.jpg', 'Ранорасширитель Эдсона.jpg', 'Ножницы глазные Купера.jpg', 'Зонд Кохера.jpg', 'Рашпиль.jpg', 'Иглы колющие, режущие, атравматические.png', 'Ранорасширитель Янсена.jpg', 'Набор ножей ампутационных.jpg', 'Мозговая игла Кушинга.jpg', 'Лигатурный диссектор.jpg', 'Жгут кровоостанавливающий.jpg', 'Скальпель глазной.jpg', 'Зажим кровоостанавливающий Бильрота.jpg', 'Ложечка Фолькмана.jpg', 'Зажим кровоостанавливающий Кохера.jpg', 'Нейрохирургические зажимы кровоостанавливающие.jpg', 'Зеркало печеночное.jpg', 'Жом Пайра кишечный и желудочный.jpg', 'Зеркало седловидное.jpg', 'Расширитель трахеи Труссо.jpg', 'Мозговые шпатели.jpg', 'Зажим Федорова.jpg', 'Пинцет Лапчатый.jpg', 'Кишечный зажим мягкий (эластичный).jpg', 'Распаторы прямой и изогнутый Фарабефа.jpg', 'Ранорасширитель Микулича.jpg', 'Коловорот с набором фрез.jpg', 'Пинцет Хирургический.jpg', 'Кусачки Люэра.jpg', 'Зеркало почечное.jpg', 'Скальпель остроконечный.jpg', 'Ножницы Рихтера.jpg', 'Тупой крючок.jpg', 'Однозубый крючок.jpg', 'корцанг.jpg', 'Костная ложечка Фолькмана.jpg', 'Пинцет  Анатомический.jpg', 'Зонд  Желобоватый.jpg'];
          };
    
          const photoDir = 'image';
          
          const questions = [];
          
          const photoFiles = readFiles(photoDir);
          
          photoFiles.forEach((photo, index) => {
            const otherPhotos = photoFiles.filter((_, i) => i !== index);
            const randomIndex = Math.floor(Math.random() * otherPhotos.length);
            const ans = Boolean(Math.random() < 0.5 ? 0 : 1);
            questions.push({
              photos: [photo, otherPhotos[randomIndex]],
              correctIndex: [ans,!ans],
            });
          });
          
          let currentQuestionIndex = 0;
          
          function loadQuestion() {

            var divElement = document.getElementById('name');
            
            const question = questions[currentQuestionIndex];
            console.log(question.correctIndex)
            if(question.correctIndex[0]){
                divElement.textContent = question.photos[0];
            }else{
                divElement.textContent = question.photos[1];
            }
            
            const photo1Element = document.getElementById('photo1');
            const photo2Element = document.getElementById('photo2');
          
            photo1Element.src = 'image/' + question.photos[0];
            photo2Element.src = 'image/' + question.photos[1];

            
          }
          
          document.addEventListener('DOMContentLoaded', function() {
            loadQuestion();
          });
          
          function checkAnswer(selectedIndex) {
            const question = questions[currentQuestionIndex];
            if (question.correctIndex[selectedIndex]) {
                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                loadQuestion();
            } 
        
          }
          
import styles from "./Gallery.module.css";

  <section class="catalog-section">
  
  <div class="container">
      <h1 class="catalog-title">Для любых событий и дорогих вам людей</h1>
      <div class="catalog-grid">
        <div class="product-card">
          <img src="img/cakes/cake10.jpg" alt="Кремовый замок">
          <div class="product-info">
            <h2>Кремовый замок</h2>
            <p>Нежный крем любого цвета на выбор, ванильная основа</p>
            <span class="price">150 ₽/шт.</span>
          
            <button type="button" id="zb1" class="orderbttn" onclick="ToBasket('1')"> Заказать </button> 

            <div> 
            <button type="button" id="cbd1" class="counterbttndec" onclick="ProdCntDec('1')">−</button> 
            <input type="number" id="c1" value="1" class="counter"> 
            <button type="button" id="cbi1" class="counterbttninc" onclick="ProdCntInc('1')">+</button> 
            <input type="number" id="cs1" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake9.jpg" alt="Малиновый рай">
          <div class="product-info">
            <h2>Малиновый рай</h2>
            <p>Воздушный крем, темная основа и ягода малины</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb2" class="orderbttn" onclick="ToBasket('2')"> Заказать </button> 

            <div> 
            <button type="button" id="cbd2" class="counterbttndec" onclick="ProdCntDec('2')">−</button> 
            <input type="number" id="c2" value="1" class="counter"> 
            <button type="button" id="cbi2" class="counterbttninc" onclick="ProdCntInc('2')">+</button> 
            <input type="number" id="cs2" value="1" class="countersum"> 
            </div>

          </div>          
        </div>

        <div class="product-card">
          <img src="img/cakes/cake6.jpg" alt="Фейерверк">
          <div class="product-info">
            <h2>Фейерверк</h2>
            <p>Разноцветный крем, с бисквитной основой</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb3" class="orderbttn" onclick="ToBasket('3')"> Заказать </button> 

            <div> 
            <button type="button" id="cbd3" class="counterbttndec" onclick="ProdCntDec('3')">−</button> 
            <input type="number" id="c3" value="1" class="counter"> 
            <button type="button" id="cbi3" class="counterbttninc" onclick="ProdCntInc('3')">+</button> 
            <input type="number" id="cs3" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake12.jpg" alt="Шоколадный мир">
          <div class="product-info">
            <h2>Шоколадный мир</h2>
            <p>Ореховая стружка, нежный крем и шоколадная основа</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb4" class="orderbttn" onclick="ToBasket('4')"> Заказать </button>

            <div> 
            <button type="button" id="cbd4" class="counterbttndec" onclick="ProdCntDec('4')">−</button> 
            <input type="number" id="c4" value="1" class="counter"> 
            <button type="button" id="cbi4" class="counterbttninc" onclick="ProdCntInc('4')">+</button> 
            <input type="number" id="cs4" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake4.jpg" alt="Слезы дракона">
          <div class="product-info">
            <h2>Слезы дракона</h2>
            <p>Нежный крем любого цвета на выбор, вафельная основа</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb5" class="orderbttn" onclick="ToBasket('5')"> Заказать </button>

            <div> 
            <button type="button" id="cbd5" class="counterbttndec" onclick="ProdCntDec('5')">−</button> 
            <input type="number" id="c5" value="1" class="counter"> 
            <button type="button" id="cbi5" class="counterbttninc" onclick="ProdCntInc('5')">+</button> 
            <input type="number" id="cs5" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake3.jpg" alt="Летняя фантазия">
          <div class="product-info">
            <h2>Летняя фантазия</h2>
            <p>Украшения в форме сердец, для любимого человека</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb6" class="orderbttn" onclick="ToBasket('6')"> Заказать </button>  

            <div> 
            <button type="button" id="cbd6" class="counterbttndec" onclick="ProdCntDec('6')">−</button> 
            <input type="number" id="c6" value="1" class="counter"> 
            <button type="button" id="cbi6" class="counterbttninc" onclick="ProdCntInc('6')">+</button> 
            <input type="number" id="cs6" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake11.jpg" alt="Мыс безумия">
          <div class="product-info">
            <h2>Мыс безумия</h2>
            <p>Разноцветная основа, стружка и нежный крем</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb7" class="orderbttn" onclick="ToBasket('7')"> Заказать </button>

            <div> 
            <button type="button" id="cbd7" class="counterbttndec" onclick="ProdCntDec('7')">−</button> 
            <input type="number" id="c7" value="1" class="counter"> 
            <button type="button" id="cbi7" class="counterbttninc" onclick="ProdCntInc('7')">+</button> 
            <input type="number" id="cs7" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake2.jpg" alt="Облачная сказка">
          <div class="product-info">
            <h2>Облачная сказка</h2>
            <p>Светлая основа, нежный крем со стружкой сверху</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb8" class="orderbttn" onclick="ToBasket('8')"> Заказать </button>

            <div> 
            <button type="button" id="cbd8" class="counterbttndec" onclick="ProdCntDec('8')">−</button> 
            <input type="number" id="c8" value="1" class="counter"> 
            <button type="button" id="cbi8" class="counterbttninc" onclick="ProdCntInc('8')">+</button> 
            <input type="number" id="cs8" value="1" class="countersum"> 
            </div>

          </div>
        </div>

        <div class="product-card">
          <img src="img/cakes/cake1.jpg" alt="Темный рыцарь">
          <div class="product-info">
            <h2>Темный рыцарь</h2>
            <p>Темная основа, нежный крем и вкусные шарики</p>
            <span class="price">150 ₽/шт.</span> 

            <button type="button" id="zb9" class="orderbttn" onclick="ToBasket('9')"> Заказать </button> 

            <div> 
            <button type="button" id="cbd9" class="counterbttndec" onclick="ProdCntDec('9')">−</button> 
            <input type="number" id="c9" value="1" class="counter"> 
            <button type="button" id="cbi9" class="counterbttninc" onclick="ProdCntInc('9')">+</button> 
            <input type="number" id="cs9" value="1" class="countersum"> 
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <P> 
  <div class="product-card">
  <div class="product-info"> 
      <CENTER> <a href="#" class="btn">В корзину</a>  </CENTER>
  </div> 
  </div> 
   <P> 

  <iframe seamless width=100% height="1150" scrolling="no" src="gallery/gallery.html" frameborder="0"> 
  </iframe> 

  <iframe seamless width=100% height="100" scrolling="no" src="footer/footer.html" frameborder="0"> 
  </iframe> 

  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <button class="modal-close" id="modalClose">&times;</button>
      <div class="modal-content">
        <h2>Чтобы сделать заказ, расскажите нам о себе</h2>
        
        
        <form id="orderForm" class="order-form">
          <div class="form-grid">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Имя" required>
            </div>
            <div class="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Номер телефона" required>
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Адрес почты">
            </div>
            <div class="form-group">
              <input type="text" id="time" name="time" placeholder="Удобное для звонка время">
            </div>
          </div>
          <p>Мы перезвоним Вам в удобное время,<br> чтобы уточнить ваши пожелания</p>
          <div class="form-checkbox">
            <input type="checkbox" id="agree" name="agree" required>
            <label for="agree">Нажимая на кнопку, вы соглашаетесь с 
              <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/315f051396c88f1e4f827ba3f2ae313d999a1873/" target="_blank" class="privacy-link">условиями обработки персональных данных</a>
            </label>
          </div>
          
          <button type="submit" class="btn submit-btn" disabled>Сделать заказ</button>
        </form>
      </div>
    </div>
  </div> 

<script> 

function ToBasket(id) {
  document.getElementById("zb" + id).style.display = "none"; 
  document.getElementById("cbd" + id).style.display = "inline"; 
  document.getElementById("c" + id).style.display = "inline"; 
  document.getElementById("cbi" + id).style.display = "inline"; 
  document.getElementById("cs" + id).style.display = "inline"; 
}

function ProdCntInc(id) { 
  n = 0; 
  nv = 0;
  n = parseInt(document.getElementById("c" + id).value); 
  nv = n + 1;
  document.getElementById("c" + id).value = n + 1; 
  document.getElementById("cs" + id).value = nv * 150; 
} 

function ProdCntDec(id) { 
  n = 0; 
  nv = 0; 
  n = parseInt(document.getElementById("c" + id).value); 
  nv = n - 1; 
  document.getElementById("c" + id).value = nv; 
  document.getElementById("cs" + id).value = nv * 150; 
  if (nv < 1) { 
    document.getElementById("zb" + id).style.display = "inline"; 
    document.getElementById("cbd" + id).style.display = "none"; 
    document.getElementById("c" + id).style.display = "none"; 
    document.getElementById("cbi" + id).style.display = "none"; 
    document.getElementById("cs" + id).style.display = "none"; 
  }
} 


document.addEventListener('DOMContentLoaded', function() {
  const orderButtons = document.querySelectorAll('.product-card .btn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const orderForm = document.getElementById('orderForm');
  const submitBtn = document.querySelector('.submit-btn');
  
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const agreeCheckbox = document.getElementById('agree');
  
  orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
       e.preventDefault();
       modalOverlay.style.display = 'flex'; 
       document.body.style.overflow = 'hidden'; 

      // orderButtons.button.hidden = true; 
      // button.style.display = "none"; 
    });
  });
  
  modalClose.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    orderForm.reset();
    submitBtn.disabled = true;
    
    alert('Ваш заказ принят! Мы свяжемся с вами в ближайшее время.');
  });
  
  function validateForm() {
    const isNameValid = nameInput.value.trim() !== '';
    const isPhoneValid = phoneInput.value.trim() !== '';
    const isAgreed = agreeCheckbox.checked;
    
    submitBtn.disabled = !(isNameValid && isPhoneValid && isAgreed);
  }
  
  nameInput.addEventListener('input', validateForm);
  phoneInput.addEventListener('input', validateForm);
  agreeCheckbox.addEventListener('change', validateForm);

  if (privacyLink) {
    privacyLink.addEventListener('click', function(e) {
      e.stopPropagation(); 
      
    });
  }

});

</script> 
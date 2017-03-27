<section class="section section_padding">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="dd-title-tesemonials">
					<span>Отзывы наших клиентов</span>
				</div>
				<div class="dd-sslider-wrap">
					<div id="dd-slider">
						<div class="item">
							<div class="dd-item-box">
								<div class="dd-item-img">
									<img src="img/f1.png" alt="">
								</div>
								<div class="dd-item-txt">
									<span>Алексей, Ровенская область</span>
									<p>“Мое знакомство с компанией Stoller, началось с препарата Bioforge. Помимо
										качественного результата от использования данного продукта, я хотел бы отметить
										оперативную и грамотную поддержку сотрудника компании, что так же является немаловажным”
									</p>
								</div>
							</div>
						</div>	
						<div class="item">
							<div class="dd-item-box">
								<div class="dd-item-img">
									<img src="img/f2.png" alt="">
								</div>
								<div class="dd-item-txt">
									<span>Дмитрий. Житомирская область.</span>
									<p>“Не знаю в чем секрет продуктов Stoller, но 100 га моей сои, словно зажили новой жизнью. Рекомендую к применению”.
									</p>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="dd-item-box">
								<div class="dd-item-img">
									<img src="img/f3.png" alt="">
								</div>
								<div class="dd-item-txt">
									<span>Данил. Одесская область.</span>
									<p>“Перепробывав массу препаратов, направленных на питание растений в условиях сухого климата, я убедился, что такой препарат, как Bioforge – это оптимальное решение, способствующие справиться с особенностями климатических условия моего региона”.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script>
	var owl2 = $("#dd-slider");
	owl2.owlCarousel({
		loop:true,
		nav:true, 
		autoplay:false,
		smartSpeed:1000,
		margin:25,
		center:false,   
		navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1 
			},
			990:{
				items:1
			},      

			1248:{
				items:1
			}
		}
	});
</script>
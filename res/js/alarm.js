SystemFn(function() {
	let ms_d = _("#millisecs"), s_d = _("#seconds"), m_d = _("#minutes"), h_d = _("#hours");
	let ms = 0, s = 0, m = 0, h = 0;
	let timer = null, audio = new Audio("res/audio/alarm_tone_1.mp3");

	function editable() {
		ms_d.setAttribute("contenteditable", true);
		s_d.setAttribute("contenteditable", true);
		m_d.setAttribute("contenteditable", true);
		h_d.setAttribute("contenteditable", true);
	}

	function notEditable() {
		ms_d.removeAttribute("contenteditable");
		s_d.removeAttribute("contenteditable");
		m_d.removeAttribute("contenteditable");
		h_d.removeAttribute("contenteditable");
	}

	function stopTimer() {
		clearInterval(timer);
		timer = null;
	}

	_("#start").on("click", function() {
		ms = ms_d.txt().int();
		s = s_d.txt().int();
		m = m_d.txt().int();
		h = h_d.txt().int();

		if(ms === 0 && s === 0 && m === 0 && h === 0) {
			return;
		}

		this.toggleClasses("success", "warning");

		if(!isDeclared(timer)) {
			notEditable();
			this.txt("Stop");

			timer = setInterval(function() {
				ms_d.txt(ms);
				_("#seconds").txt(s);
				_("#minutes").txt(m);
				_("#hours").txt(h);
				
				if(ms <= 0 && s > 0) {
					ms = 100;
					s--;
				}

				if(s <= 0 && m > 0) {
					s = 59;
					m--;
				}

				if(m <= 0 && h > 0) {
					m = 59;
					h--;
				}

				if(ms === 0 && s === 0 && m === 0 && h === 0) {
					stopTimer();
					audio.play();
					new Request({
						method: "GET",
						url: "ajax/notifier.php"
					});

					let p = new Popup({
						title: "Time's up, bitch!",
						buttons: {
							"confirm": {
								text: "Ok",
								appearance: "success",
								click: function() {
									document.body.removeChild(p);
									audio.pause();
								}
							}
						}
					});

					document.body.appendChild(p);
				}

				if(ms > 0) {
					ms--;
				}
			}, 10);
		} else {
			this.txt("Start");
			stopTimer();
		}
	});

	_("#reset").on("click", function() {
		if(isDeclared(timer)) {
			stopTimer();
		}

		_("#millisecs").txt(0);
		_("#seconds").txt(0);
		_("#minutes").txt(0);
		_("#hours").txt(0);
		
		editable();
	});
});

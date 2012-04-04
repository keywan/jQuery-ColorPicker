//name i1_colorpicker
//pro: small, working
//contra: 
//    - very bad object design, "this" does not exist, calling functions is pain
//    - very bad ui theme suport
//    - less functional then i2_colorpicker
//

(function ($) {
	var ColorPicker = function () {
		var that = this;
		var _colors = {
			'black': [0x00, 0x00, 0x00],
			'dimgray': [0x69, 0x69, 0x69],
			'gray': [0x80, 0x80, 0x80],
			'darkgray': [0xa9, 0xa9, 0xa9],
			'silver': [0xc0, 0xc0, 0xc0],
			'lightgrey': [0xd3, 0xd3, 0xd3],
			'gainsboro': [0xdc, 0xdc, 0xdc],
			'whitesmoke': [0xf5, 0xf5, 0xf5],
			'white': [0xff, 0xff, 0xff],
			'rosybrown': [0xbc, 0x8f, 0x8f],
			'indianred': [0xcd, 0x5c, 0x5c],
			'brown': [0xa5, 0x2a, 0x2a],
			'firebrick': [0xb2, 0x22, 0x22],
			'lightcoral': [0xf0, 0x80, 0x80],
			'maroon': [0x80, 0x00, 0x00],
			'darkred': [0x8b, 0x00, 0x00],
			'red': [0xff, 0x00, 0x00],
			'snow': [0xff, 0xfa, 0xfa],
			'salmon': [0xfa, 0x80, 0x72],
			'mistyrose': [0xff, 0xe4, 0xe1],
			'tomato': [0xff, 0x63, 0x47],
			'darksalmon': [0xe9, 0x96, 0x7a],
			'orangered': [0xff, 0x45, 0x00],
			'coral': [0xff, 0x7f, 0x50],
			'lightsalmon': [0xff, 0xa0, 0x7a],
			'sienna': [0xa0, 0x52, 0x2d],
			'seashell': [0xff, 0xf5, 0xee],
			'chocolate': [0xd2, 0x69, 0x1e],
			'saddlebrown': [0x8b, 0x45, 0x13],
			'sandybrown': [0xf4, 0xa4, 0x60],
			'peachpuff': [0xff, 0xda, 0xb9],
			'peru': [0xcd, 0x85, 0x3f],
			'linen': [0xfa, 0xf0, 0xe6],
			'darkorange': [0xff, 0x8c, 0x00],
			'bisque': [0xff, 0xe4, 0xc4],
			'burlywood': [0xde, 0xb8, 0x87],
			'tan': [0xd2, 0xb4, 0x8c],
			'antiquewhite': [0xfa, 0xeb, 0xd7],
			'navajowhite': [0xff, 0xde, 0xad],
			'blanchedalmond': [0xff, 0xeb, 0xcd],
			'papayawhip': [0xff, 0xef, 0xd5],
			'orange': [0xff, 0xa5, 0x00],
			'moccasin': [0xff, 0xe4, 0xb5],
			'wheat': [0xf5, 0xde, 0xb3],
			'oldlace': [0xfd, 0xf5, 0xe6],
			'floralwhite': [0xff, 0xfa, 0xf0],
			'goldenrod': [0xda, 0xa5, 0x20],
			'darkgoldenrod': [0xb8, 0x86, 0x0b],
			'cornsilk': [0xff, 0xf8, 0xdc],
			'gold': [0xff, 0xd7, 0x00],
			'palegoldenrod': [0xee, 0xe8, 0xaa],
			'khaki': [0xf0, 0xe6, 0x8c],
			'lemonchiffon': [0xff, 0xfa, 0xcd],
			'darkkhaki': [0xbd, 0xb7, 0x6b],
			'beige': [0xf5, 0xf5, 0xdc],
			'lightgoldenrodyellow': [0xfa, 0xfa, 0xd2],
			'olive': [0x80, 0x80, 0x00],
			'yellow': [0xff, 0xff, 0x00],
			'lightyellow': [0xff, 0xff, 0xe0],
			'ivory': [0xff, 0xff, 0xf0],
			'olivedrab': [0x6b, 0x8e, 0x23],
			'yellowgreen': [0x9a, 0xcd, 0x32],
			'darkolivegreen': [0x55, 0x6b, 0x2f],
			'greenyellow': [0xad, 0xff, 0x2f],
			'lawngreen': [0x7c, 0xfc, 0x00],
			'chartreuse': [0x7f, 0xff, 0x00],
			'darkseagreen': [0x8f, 0xbc, 0x8f],
			'forestgreen': [0x22, 0x8b, 0x22],
			'limegreen': [0x32, 0xcd, 0x32],
			'lightgreen': [0x90, 0xee, 0x90],
			'palegreen': [0x98, 0xfb, 0x98],
			'darkgreen': [0x00, 0x64, 0x00],
			'green': [0x00, 0x80, 0x00],
			'lime': [0x00, 0xff, 0x00],
			'honeydew': [0xf0, 0xff, 0xf0],
			'mediumseagreen': [0x3c, 0xb3, 0x71],
			'seagreen': [0x2e, 0x8b, 0x57],
			'springgreen': [0x00, 0xff, 0x7f],
			'mintcream': [0xf5, 0xff, 0xfa],
			'mediumspringgreen': [0x00, 0xfa, 0x9a],
			'mediumaquamarine': [0x66, 0xcd, 0xaa],
			'aquamarine': [0x7f, 0xff, 0xd4],
			'turquoise': [0x40, 0xe0, 0xd0],
			'lightseagreen': [0x20, 0xb2, 0xaa],
			'mediumturquoise': [0x48, 0xd1, 0xcc],
			'darkslategray': [0x2f, 0x4f, 0x4f],
			'paleturquoise': [0xaf, 0xee, 0xee],
			'teal': [0x00, 0x80, 0x80],
			'darkcyan': [0x00, 0x8b, 0x8b],
			'darkturquoise': [0x00, 0xce, 0xd1],
			'aqua': [0x00, 0xff, 0xff],
			'cyan': [0x00, 0xff, 0xff],
			'lightcyan': [0xe0, 0xff, 0xff],
			'azure': [0xf0, 0xff, 0xff],
			'cadetblue': [0x5f, 0x9e, 0xa0],
			'powderblue': [0xb0, 0xe0, 0xe6],
			'lightblue': [0xad, 0xd8, 0xe6],
			'deepskyblue': [0x00, 0xbf, 0xff],
			'skyblue': [0x87, 0xce, 0xeb],
			'lightskyblue': [0x87, 0xce, 0xfa],
			'steelblue': [0x46, 0x82, 0xb4],
			'aliceblue': [0xf0, 0xf8, 0xff],
			'dodgerblue': [0x1e, 0x90, 0xff],
			'slategray': [0x70, 0x80, 0x90],
			'lightslategray': [0x77, 0x88, 0x99],
			'lightsteelblue': [0xb0, 0xc4, 0xde],
			'cornflowerblue': [0x64, 0x95, 0xed],
			'royalblue': [0x41, 0x69, 0xe1],
			'midnightblue': [0x19, 0x19, 0x70],
			'lavender': [0xe6, 0xe6, 0xfa],
			'navy': [0x00, 0x00, 0x80],
			'darkblue': [0x00, 0x00, 0x8b],
			'mediumblue': [0x00, 0x00, 0xcd],
			'blue': [0x00, 0x00, 0xff],
			'ghostwhite': [0xf8, 0xf8, 0xff],
			'darkslateblue': [0x48, 0x3d, 0x8b],
			'slateblue': [0x6a, 0x5a, 0xcd],
			'mediumslateblue': [0x7b, 0x68, 0xee],
			'mediumpurple': [0x93, 0x70, 0xdb],
			'blueviolet': [0x8a, 0x2b, 0xe2],
			'indigo': [0x4b, 0x00, 0x82],
			'darkorchid': [0x99, 0x32, 0xcc],
			'darkviolet': [0x94, 0x00, 0xd3],
			'mediumorchid': [0xba, 0x55, 0xd3],
			'thistle': [0xd8, 0xbf, 0xd8],
			'plum': [0xdd, 0xa0, 0xdd],
			'violet': [0xee, 0x82, 0xee],
			'purple': [0x80, 0x00, 0x80],
			'darkmagenta': [0x8b, 0x00, 0x8b],
			'magenta': [0xff, 0x00, 0xff],
			'fuchsia': [0xff, 0x00, 0xff],
			'orchid': [0xda, 0x70, 0xd6],
			'mediumvioletred': [0xc7, 0x15, 0x85],
			'deeppink': [0xff, 0x14, 0x93],
			'hotpink': [0xff, 0x69, 0xb4],
			'palevioletred': [0xdb, 0x70, 0x93],
			'lavenderblush': [0xff, 0xf0, 0xf5],
			'crimson': [0xdc, 0x14, 0x3c],
			'pink': [0xff, 0xc0, 0xcb],
			'lightpink': [0xff, 0xb6, 0xc1]
		};
		
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			RGBA_ARRAY_to_RGB = function(col){
				return {
					r : col[0],
					g : col[1],
					b : col[2],
				}
			},
			_parseColor = function (color) {
				var m;
				// rgba(r,g,b,a)
				m = /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/.exec(color);
				if (m) {
					return [
						m[1],
						m[2],
						m[3],
						m[4]
					];
				}

				// rgba(r%,g%,b%,a%)
				m = /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/.exec(color);
				if (m) {
					return [
						m[1],
						m[2],
						m[3],
						m[4]
					];
				}

				// {#}rrggbb
				m = /^#?([a-fA-F0-9]{0,6})/.exec(color);
				if (m) {
					c = parseInt(m[1], 16);
					return [((c >> 16) & 0xFF),
							((c >>  8) & 0xFF),
							(c & 0xFF)];
				}

				// #rgb
				m = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color);
				if (m) {
					return [
						parseInt(m[1] + m[1], 16),
						parseInt(m[2] + m[2], 16),
						parseInt(m[3] + m[3], 16)
					];
				}
				var name = $.trim(color).toLowerCase(),	c;

				if (_colors[name]) {
					c = _colors[name];
					return [c[0], c[1], c[2]];
				}


				return [0,0,0];
			},
			
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					do_change(cal,col,true);
				}else{
					do_change(cal,col,false);
				}
			},
			do_change = function(cal,col,fill) {
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').color = col;
				if (fill){
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el, cal.data('colorpicker').parent]);
			}
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				submit(cal);
			},
			submit = function (cal){
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el, cal.data('colorpicker').parent);
			}
			show = function (ev) {
				var me = $(this);
				var cal = $('#' + me.data('colorpickerId'));
				var options = cal.data('options');
				
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					if (options.dialog != null){
						cal.parent().dialog('open');
					}else{
						var pos = me.position();
						var top = pos.top + this.offsetHeight;
						var left = pos.left;
						cal.css({left: left + 'px', top: top + 'px'});
						cal.show();
					}
				}
				
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						var options = ev.data.cal.data('options');
						if (options.dialog != null){
							ev.data.cal.parent().dialog('close');
						}else{
							ev.data.cal.hide();
						}
					}
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function (cal) {
				var col = cal.data('colorpicker').origColor;
				do_change(cal,col,true);
			};
			
		// statische mehtoden die auf private members zugreifen koennen
		// this bezieht sich hier immer auf das jquery object auf dem die methode aufgerufen wird
		
		return {
			options : null,
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				this.options = opt;
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
                        options.parent = $(this);
						var cal = $(tpl);
						cal.attr('id', id);
						cal.data('parent', $(this).attr('id'));
						if (options.flat) {
							cal.appendTo(this).show();
						} else if(options.dialog != null){
							var dialog = $('<div title="Farbauswahl"></div>');
							cal.appendTo(dialog);
							var dialog_options = { autoOpen : false, modal:true };
							dialog_options.height = 'auto';//box.height();
							dialog_options.width = 'auto';//box.width();
							dialog_options.buttons = { "Ok": function() { 
									var cal = $(this).find('.colorpicker');
									submit(cal);
									dialog.dialog('close'); 
								},
								"Cancle": function() { 
									dialog.dialog("close");
									var cal = $(this).find('.colorpicker');
									restoreOriginal(cal);
								}
							};
							
							dialog_options = $.extend(dialog_options,options.dialog);
							dialog.dialog(dialog_options);
							function destroy(){
								cal.dialog('destroy');
							}
							$(this).on('DOMNodeRemoved',destroy);
						} else {
							//document.body
							cal.appendTo($(this).parent());
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', function(){restoreOriginal($(this).parent())});
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						cal.data('options',options);
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = _parseColor(col);
					col = RGBA_ARRAY_to_RGB(col);
					col = RGBToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').origColor = col;
						setCurrentColor(col, cal.get(0));
						do_change(cal,col,true);
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);
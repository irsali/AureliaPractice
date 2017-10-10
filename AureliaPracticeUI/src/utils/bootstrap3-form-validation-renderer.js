define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bootstrap3FormValidationRenderer = (function () {
        function Bootstrap3FormValidationRenderer() {
        }
        Bootstrap3FormValidationRenderer.prototype.render = function (instruction) {
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element = elements_1[_c];
                    this.remove(element, result);
                }
            }
            for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
                var _f = _e[_d], result = _f.result, elements = _f.elements;
                for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                    var element = elements_2[_g];
                    this.add(element, result);
                }
            }
        };
        Bootstrap3FormValidationRenderer.prototype.add = function (element, result) {
            if (result.valid) {
                return;
            }
            var formGroup = element.closest('.form-group');
            if (!formGroup) {
                return;
            }
            formGroup.classList.add('has-error');
            var message = document.createElement('span');
            message.className = 'help-block';
            message.textContent = result.message;
            message.id = "validation-message-" + result.id;
            formGroup.lastElementChild.appendChild(message);
        };
        Bootstrap3FormValidationRenderer.prototype.remove = function (element, result) {
            if (result.valid) {
                return;
            }
            var formGroup = element.closest('.form-group');
            if (!formGroup) {
                return;
            }
            var message = formGroup.lastElementChild.querySelector("#validation-message-" + result.id);
            if (message) {
                formGroup.lastElementChild.removeChild(message);
                if (formGroup.lastElementChild.querySelectorAll('.help-block').length === 0) {
                    formGroup.classList.remove('has-error');
                }
            }
        };
        return Bootstrap3FormValidationRenderer;
    }());
    exports.Bootstrap3FormValidationRenderer = Bootstrap3FormValidationRenderer;
});
//# sourceMappingURL=bootstrap3-form-validation-renderer.js.map
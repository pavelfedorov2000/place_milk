$(function () {
    $(document).on('click', '.minus-btn', function (e) {
        e.preventDefault();
        const $btn = $(this);
        const $input = $btn.next();
        let value = parseInt($input.val());
        while (value > 0) {
            value -= 1;
            break;
        }
        $input.val(value);
    });

    $(document).on('click', '.plus-btn', function (e) {
        e.preventDefault();
        const $btn = $(this);
        const $input = $btn.prev();
        let value = parseInt($input.val());
        value += 1;
        $input.val(value);
    });
});
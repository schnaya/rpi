// JavaScript source code
$(document).ready(function () {
    //����������� ���� �� ���������� acc-head
    $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc() {
    //�������� ��� ����� ����, ��� ������ �������
    $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
    // ��������� ��� �������� ���� ��� ����������, �� �������� ��������
    $(this).next().slideToggle(2000);
}
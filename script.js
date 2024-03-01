$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefaToDo = $('#tarefa').val();
    const novoItem = $('<li></li>');
    $(novoItem).appendTo('<li></li>');
    $(novoItem).fadeIn(750);
    $('#tarefa').val('')
})
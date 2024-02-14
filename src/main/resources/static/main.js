
   function searchUser() {
       let nome = $('#searchName').val();
       if (nome != null || nome.trim() != '') {
           $.ajax({
               method: "GET",
               url: "/api/users/searchByName",
               data: "name=" + nome,
               success: function(response) {
                   $('#tableResult > tbody > tr').remove();

                   for (let i = 0; i < response.length; i++) {
                       $('#tableResult > tbody').append(
                           '<tr id="'+ response[i].id +'">' +
                           '<td>' + response[i].id + '</td>' +
                           '<td>' + response[i].name + '</td>' +
                           '<td><button type="button" id=(' + response[i].id + ') onclick="seeData(' + response[i].id + ')" class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></td>' +
                           '<td><button type="button" id=(' + response[i].id + ') onclick="deleteUser(' + response[i].id + ')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>' +
                           '</tr>'
                       );
                   }
               },
               error: function(xhr, status, errorThrown) {
                   alert("Erro ao buscar usuário : " + xhr.responseText);
               }
           });
       } else {
           alert("Erro ao buscar usuário : ");
       }
   }



    function deleteUser(id){
        console.log("id: "+id)
        if(confirm("Deseja realmente deletar?")){
            $.ajax({
                method: "DELETE",
                url: "api/users/delete/"+id,
                success: function(response) {
                    $('#'+id).remove();
                    alert("Excluído como sucesso!");
                    searchUser();
                $("#modalSearchUser").modal('hide');

                },
                error: function(xhr, status, errorThrown) {
                    alert("Erro ao deletar usuário : " + xhr.responseText);
                }
            });
        }
    }

    function seeData(id){
        console.log("edit "+ id);

    $.ajax({
        method: "GET",
        url: "api/users/searchById?id=" + id,
        success: function(response) {

            $("#id").val(response.id);
            $("#name").val(response.name);
            $("#email").val(response.email);
            $("#age").val(response.age);

        $("#modalSearchUser").modal('hide');

        },
        error: function(xhr, status, errorThrown) {
            alert("Erro ao buscar usuário : " + xhr.responseText);
        }
    });


    }

    function saveUser() {
        let name = $("#name").val();
        let email = $("#email").val();
        let age = $("#age").val();

        if(name == null ||     name.trim() == ''){
            $("#name").focus();
            alert("Informe o nome!");
            return;
        }

        if(email == null || email.trim() == ''){
            $("#email").focus();
            alert("Informe o email!");
            return;
        }
        if(age == null || age.trim() == ''){
            $("#age").focus();
            alert("Informe a idade!");
            return;
        }
        $.ajax({
        method: "POST",
        url: "api/users/register",
        data: JSON.stringify({
          "name": name,
          "age": age,
          "email": email
        }),
        contentType: "application/json;charset=utf-8",
        success: function(response) {
            alert("Salvo com Sucesso");
            $("#id").val(response.id);
            document.getElementById('formRegisterUser').reset();
            searchUser();
        },
        error: function(xhr, status, errorThrown) {
          alert("Erro ao Salvar : " + xhr.responseText);

        }
        });
    }

    function editUser() {
        let id = $("#id").val();
        let name = $("#name").val();
        let email = $("#email").val();
        let age = $("#age").val();

        if(name == null ||     name.trim() == ''){
            $("#name").focus();
            alert("Informe o nome!");
            return;
        }

        if(email == null || email.trim() == ''){
            $("#email").focus();
            alert("Informe o email!");
            return;
        }
        if(age == null || age.trim() == ''){
            $("#age").focus();
            alert("Informe a idade!");
            return;
        }
        $.ajax({
        method: "PUT",
        url: "api/users/update",
        data: JSON.stringify({
            "id": id,
            "name": name,
            "age": age,
            "email": email
        }),
        contentType: "application/json;charset=utf-8",
        success: function(response) {
            alert("Dados Editados com Sucesso");
            document.getElementById('formRegisterUser').reset();
            searchUser();

        },
        error: function(xhr, status, errorThrown) {
          alert("Erro ao Salvar : " + xhr.responseText);

        }
        });
    }

    function btnDeleteUser(){

    let id = $('#id').val();
        if(id != null && id.trim() != ""){
            deleteUser(id);
            document.getElementById('formRegisterUser').reset();
            searchUser();
            return;
        }
            alert("Veja os dados primeiro que deseja deletar!")

    }



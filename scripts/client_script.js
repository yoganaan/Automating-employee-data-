function onSubmit() {

    var name = g_form.getValue('employee_name');

    if (name == '') {
        alert("Employee name is required");
        return false;
    }

    return true;
}
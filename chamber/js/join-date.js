const jdatestr = new Date().toISOString();
jdatestr = jdatestr.substring(0,16);
document.getElementById('joindate').value = jdatestr;
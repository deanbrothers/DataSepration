var lines='';
$("#filename").change(function(e) {
    $("#data_heading").empty();
    //var file=$("input#filename").val();

    //var pos = file.lastIndexOf(".");
    //file = file.substr(0, pos < 0 ? file.length : pos) + ".csv";
    var ext = $("input#filename").val().split(".").pop().toLowerCase();
    //var ext = file.split(".").pop().toLowerCase();
    console.log($.inArray(ext, ["xlsx", "csv"]));

    if($.inArray(ext, ["xlsx", "xlsb", "XLSX", "XLSB", "xls", "XLS"]) >= 0){
        //XLSX = require('xlsx');
        var file=$("#filename").val()
        //var file=$("input#filename").val();

        // var pos = e.target.files[0].lastIndexOf(".");
        // e.target.files[0] = e.target.files[0].substr(0, pos < 0 ? file.length : pos) + ".xlsx";
        if (e.target.files != undefined) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
                console.log(e.target.result);
                
              var data = e.target.result;
              if($.inArray(ext, ["xlsx", "XLSX"]) >= 0){
                var workbook = XLSX.read(data, {
                    type: 'binary'
                  });                  
              }
              else if($.inArray(ext, ["xlsb", "XLSB"]) >= 0){
                var workbook = XLSX.read(data, {
                    type: 'binary'
                  });                  
              }
              else if($.inArray(ext, ["xls", "XLS"]) >= 0){

                var workbook = XLS.read(data, {
                    type: 'binary'
                  });                  
              }
              else{
                  console.log("Wrong Format");
                  
              }
            //   workbook.SheetNames.forEach(function(sheetName) {
            //     // Here is your object
            //     var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            //     var json_object = JSON.stringify(XL_row_object);
            //     console.log(json_object);
            //     var csvData=ConvertToCSV(json_object);
            //     appendTitle(csvData);
        
            //   })
        
            };
        
            reader.onerror = function(ex) {
              console.log(ex);
            };
            if(e.target.files[0]){
                if(ext=='XLSB'){
                    var xlsbFile=e.target.files[0];
                    var workbook = new workbook(e.target.files[0])
                    workbook.save(e.target.files[0]+'.xlsx')  
                    reader.readAsBinaryString(workbook);
                }
                else{
                    reader.readAsBinaryString(e.target.files[0]);
                    console.log(e.target.files[0]);
                }
                  
            }
        }
    }
    
    else if($.inArray(ext, ["csv"]) == 0) {
        if (e.target.files != undefined) {
            var reader = new FileReader();
            reader.onload = function(e) {
                appendTitle(e.target.result);
            };
            reader.readAsText(e.target.files.item(0));
        }
    }
    else{
        alert('Upload CSV, XLSX, XLSB, XLS');
        return false;
    }
    return false;
});

$("#data_heading").change(function(e) {
    $("#filtered_option").empty();
    var data_heading_selected=$('#data_heading').val();
    var heading=lines[0].split(',');
    var selected_coloumn_index=heading.indexOf(data_heading_selected);
    var selected_data_list=[];
    for (i = 0; i < lines.length; i++)
    {
        var line_data=lines[i].split(',');
        var line_data_value=line_data[selected_coloumn_index];
        if(selected_data_list.indexOf(line_data_value)<0){
            selected_data_list.push(line_data[selected_coloumn_index]);
            $('#filtered_option').append('<option value="'+line_data[selected_coloumn_index]+'">' + line_data[selected_coloumn_index]+'</option>');
        }
    }
});

$("#submit").click(async function(e) {
    let csvContent;
    var data_heading_selected=$('#data_heading').val();
    var filtered_option_selected=$('#filtered_option').val();
    var heading=lines[0].split(',');
    var selected_coloumn_index=heading.indexOf(data_heading_selected);
    csvContent += heading + "\r\n";
    let hiddenElement = document.createElement('a');
    Promise.resolve(
        lines.forEach(function(rowArray) {
            var convertedArray = [];
            var row_data=rowArray.split(',');
            if(row_data[selected_coloumn_index]==filtered_option_selected){
                console.log(row_data[selected_coloumn_index]);
                for(var i = 0; i < row_data.length; ++i)
                {
                    convertedArray.push(row_data[i]);
                }
            }
            let row = convertedArray.join(",");
            if(row.length>1){
                csvContent += row + "\r\n";
            }
            
        })

        
    ).then(()=>{
        console.log(csvContent.length);
        //if(result){
            let dataSet = new Blob([csvContent], { type: 'text/csv' });
            hiddenElement.href = URL.createObjectURL(dataSet);
            hiddenElement.target = '_blank';
            hiddenElement.download = filtered_option_selected+'.csv';
            console.log("000");        
            hiddenElement.click();
        //}
    });

    // var encodedUri = encodeURI(csvContent);
    // var link = document.createElement("a");
    // link.setAttribute("href", encodedUri);
    // link.setAttribute("download", "my_data.csv");
    // document.body.appendChild(link); // Required for FF

    // link.click();
    // window.open(encodeURI(csvContent));
    // console.log("1");
    
});

// JSON to CSV Converter
function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }
    console.log(str);
    
    return str;
}

function appendTitle(titleResult){
    lines = titleResult.split('\r\n');
    var location_id=jQuery.inArray( "billing_location_city", lines[0] );
    var heading=lines[0].split(',');
    for (i = 0; i < heading.length; i++)
    {
        console.log(heading[i]);
        
        $('#data_heading').append('<option value="'+heading[i]+'">' + heading[i]+'</option>');
    }
}
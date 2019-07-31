var db = new leancloud("https://5p7sa773vnsmn.cfc-execute.bj.baidubce.com/bthiang?sql=", "aichengurl");
//var db = new mlab("tanktotal","aichengurl");


function titleFormatter(value, row, index) {
    return `<a href="${value}" target="_blank">查看</a>`;
}

function timeFormatter(value, row, index) {
    var dt = new moment(value);
    return `<span title="${dt.format('lll')}">${dt.fromNow()}</span>`;
}


// your custom ajax request here
function ajaxRequest(params) {
    // data you need
    console.log(params.data);
    // just use setTimeout
    setTimeout(function () {
        params.success({
            total: 100,
            rows: [{
                "id": 0,
                "name": "Item 0",
                "price": "$0"
            }]
        });
    }, 1000);
}

function createQueryParams(params) {
    console.info(params);
    var filter = [];
    if (params.search) {
        filter.push("title like '%" + params.search + "%'");
        //params.filter = "where title like '%"+params.search+"%'";
    }
    var types = document.getElementById('types').value;
    if (types) {
        filter.push("type='" + types + "'");
    }
    if (filter.length) {
        params.search = true;
        params.filter = "where " + filter.join(" and ");
    }

    return params;
    // console.info(params);
    // var f = {};
    // if (params.search) {
    //     f.title = {
    //         "$regex": params.search
    //     }

    // }
    var types = document.getElementById('types').value;
    if (types) {
        f.type = types;
    }
    params.filter = JSON.stringify(f);

    return params;
}


function getUrl(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
            if (callback) {
                callback(xmlhttp.responseText);
            } else {
                console.info(xmlhttp.responseText);
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

function postUrl(url, data, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
            if (callback) {
                callback(xmlhttp.responseText);
            } else {
                console.info(xmlhttp.responseText);
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.send(data);
}

var oneday = moment().add(-1, "days");

function rowStyle(row, index) {
    console.info(row, index);
    if (!row["content"]) {
        return {
            classes: "error"
        };
    }
    if (moment(row["time"]) > oneday) {
        return {
            classes: "info"
        }
    }
    console.info(row["time"]);
    return {};
}

$("#table").on("click-row.bs.table", function (e, row, $element) {
    var index = $element.data('index');
    var isExpand = $element.next("tr").is(".detail-view");
    if (isExpand) {
        $("#table").bootstrapTable('collapseRow', index);
    } else
        $("#table").bootstrapTable('expandRow', index);
});

function detailFormatter(index, row) {
    return row['content'];
}

$("#types").on("change", function () {
    $("#table").bootstrapTable('refresh');
});

function expandAll() {
    if ($(".detail-view").length) {
        $("#table").bootstrapTable('collapseAllRows');
    } else {
        $("#table").bootstrapTable('expandAllRows');
    }
}

function showAllImages() {
    $(document.body).append('<iframe id="imgShowIframe" src="iframe.html" ></iframe>');
    window.history.pushState(null, "", "#imgList")
}

function hideImageFrame() {
    $("iframe").remove();
}
window.addEventListener("popstate", function (e) {
    hideImageFrame();
});

function prePage() {
    $("#table").bootstrapTable('prevPage');
}

function nextPage() {
    $("#table").bootstrapTable('nextPage');
}
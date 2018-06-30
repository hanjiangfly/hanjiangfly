function getMax(_list) {
    let max_ = [0, 0];
    for (let i = 0; i <= _list.length; i += 2) {
        if (_list[i] >= max_[0]) {
            max_[0] = _list[i];
            max_[1] = _list[i + 1];
        }
    }
    return max_;
}

function getMin(_list) {
    let min_ = [9999999999999999999, 0];
    for (let i = 0; i <= _list.length; i += 2) {
        if (_list[i] < min_[0]) {
            min_[0] = _list[i];
            min_[1] = _list[i + 1];
        }
    }
    return min_;
}

function get_list_from_req(req_data) {
    let jdata = JSON.parse(req_data);

}

var TABLE_INDEX = 1 ;
function _add_td(_key,_re_str) {
    if (_key < 0.001) {
        if (_key > 0 && _key < 0.001) {
            _re_str += `<td  style="background:#14efff;font-weight:normal;"  >${_key}</td>`
        } else {
            _re_str += `<td>${_key}</td>`
        }
    } else {
        _re_str += `<td  style="background:#ff002a;font-weight:normal;"  >${_key}</td>`
    }

    return _re_str ;
}
function my_add_table(jq_select_id,a_ask, a_bid, b_ask, b_bid, c_ask, c_bid, xx_tip,yy_tip) {
    let _t_table_body_add = "";

    // if (eth_tip < 0.001) {
    //     if (eth_tip > 0 && eth_tip < 0.001) {
    //         _t_table_body_add += `<td  style="background:#14efff;font-weight:normal;"  >${eth_tip}</td>`
    //     } else {
    //         _t_table_body_add += `<td>${eth_tip}</td>`
    //     }
    // } else {
    //     _t_table_body_add += `<td  style="background:#ff002a;font-weight:normal;"  >${eth_tip}</td>`
    // }
    _t_table_body_add = _add_td(xx_tip,_t_table_body_add);
    _t_table_body_add = _add_td(yy_tip,_t_table_body_add);

    let _t = `
    <tr >
        <td>${a_ask[0]}</td>
        <td>${a_ask[1]}</td>
        <td>${a_bid[0]}</td>
        <td>${a_bid[1]}</td>
        <td>${b_ask[0]}</td>
        <td>${b_ask[1]}</td>
        <td>${b_bid[0]}</td>
        <td>${b_bid[1]}</td>
        <td>${c_ask[0]}</td>
        <td>${c_ask[1]}</td>
        <td>${c_bid[0]}</td>
        <td>${c_bid[1]}</td>
        ${_t_table_body_add}
    </tr>`;


    if (TABLE_INDEX % 10 === 0) {
        _t += ` <tr>
                <th colspan="4">ft/eth</th>
                <th colspan="4">eth/usdt</th>
                <th colspan="4">ft/usdt</th>
                <th colspan="2">profit</th>
                </tr>
                <tr>
                <th colspan="2">ask1</th>
                <th colspan="2">bid1</th>
                <th colspan="2">ask1</th>
                <th colspan="2">bid1</th>
                <th colspan="2">ask1</th>
                <th colspan="2">bid1</th>
                <th>eth_profit</th>
                <th>usdt_profit</th>
                </tr>
                ` ;
    }


    $(jq_select_id).append(_t);
    TABLE_INDEX += 1 ;
}
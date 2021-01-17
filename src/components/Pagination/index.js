import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { connect } from 'react-redux';
import { setLimit, setPage } from '../../redux/UsersRedux/actions';
import { FETCH_USERS } from '../../redux/UsersRedux/types';

class TablePaginationDemo extends React.Component {

  handleChangePage = (event, newPage) => {
    this.props.setPage(newPage)
    this.props.dispatch({ type: FETCH_USERS });
  };

  handleChangeRowsPerPage = (e) => {
    //setRowsPerPage(parseInt(event.target.value, 10));
    const {
      setRowsPerPage,
      rowsPerPage,
      total,
      setPage
    } = this.props;

    if(rowsPerPage >= total) {
      this.props.setPage(0)
    }

    setPage(0)
    setRowsPerPage(e.target.value)
    this.props.dispatch({ type: FETCH_USERS });
  };

  render() {
    const {
      rowsPerPage,
      total,
      page
    } = this.props;

    return (
      <TablePagination
        component="div"
        count={total}
        page={page}
        onChangePage={this.handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    rowsPerPage: state.users.limit,
    total: state.users.total,
    page: state.users.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    setRowsPerPage: (limit) => dispatch(setLimit(limit)),
    setPage: (page) => dispatch(setPage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePaginationDemo);

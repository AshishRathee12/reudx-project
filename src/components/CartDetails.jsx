import React from 'react'
import './Cartstyle.css';

export default function CartDetails() {
  const arr = [2]
  return (
    <div className='row justify-content-center m-0'>
      <div className='col-md-8 mt-5 mb-5 cardsdetails'>
        <div className='card'>
          <div className="card-header bg-dark p-3">
            <div className='card-header-flex'>
              <h5>Cart calculation</h5>
              {
                arr.length > 0 ? <button className='btn btn-danger'><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button> : ""
              }
            </div>
          </div>
          <div className="card-body p-0">
            {arr.length === 0 ? <table className='table cart-table mb-0'>
              <tbody>
                <tr>
                  <td>
                    <div className='cart-empty'>
                      <i className='fa fa-shopping-cart'></i>
                      <p>Your Cart Is Empty</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> :
              <table className='table cart-table mb-0 table-responsive-sm'>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className='text-right'><span id='amount' className='amount'>Total Amount</span></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    arr.map((item, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button className='prdct-delete'><i className='fa fa-trash-alt mr-2' /></button>
                            </td>
                            <td>
                              <div className='product-img'>
                                <img src="" alt="" />
                              </div>
                            </td>
                            <td>
                              <div className='product-name'>
                                <p>punjabi</p>
                              </div>
                            </td>
                            <td>300</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className='prdct-qty-btn' type='button'>
                                  <i className='fa fa-minus'></i>
                                </button>
                                <input type='text' className='qty-input-box' value={1} disabled name='' id=''/>
                                <button className='prdct-qty-btn'type='button'>
                                  <i className='fa fa-plus'></i>
                                </button>
                              </div>
                            </td>
                            <td className='text-right'>400</td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

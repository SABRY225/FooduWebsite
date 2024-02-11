import React from 'react'

function CreateProduct() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h3><i className="fas fa-pen"></i>   Product Details</h3>
          <hr></hr>
        </div>
        <form>
          <div className='row'>
            <div className='col'>
              <div class="mb-3">
                <input type="text" class="form-control" id="ProductName" placeholder="Product Name" aria-describedby="Product Name" />
              </div>
              <div class="mb-3">
                <select class="form-select" aria-label="Category">
                  <option selected>Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <input type="Number" class="form-control" id="oldprice" placeholder="Old price" aria-describedby="oldprice" />
              </div>
              <div class="mb-3">
                <input type="Number" class="form-control" id="newprice" placeholder="New price" aria-describedby="Newprice" />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
              </div>
            </div>
            <div className='col'>
              <div class="mb-3">
                <label for="description" class="form-label">Choose Image of Product</label>
                <div class="input-div">
                  <input class="input" name="file" type="file" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Choose 4 Image of Product</label>
                  <input class="form-control mb-1" name="file" type="file" />
                  <input class="form-control mb-1" name="file" type="file" />
                  <input class="form-control mb-1" name="file" type="file" />
                  <input class="form-control mb-1" name="file" type="file" />
                  
              </div>
              
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <hr></hr>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateProduct

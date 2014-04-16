
    <div class="well">
      <div class="alert alert-danger fade in" style="display:none;"></div>
      <form>
        <h2><%= title %></h2>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" name="title" value="<%= title %>" />
        </div>
        <div class="form-group">
          <label>Author:</label>
          <input type="text" class="form-control" name="author" value="<%= author %>" />
        </div>
        <div class="form-group">
          <label>Description:</label>
          <textarea class="form-control" rows="5" name="description"><%= description %></textarea>
        </div>
        <button class="save btn btn-large btn-info" type="submit">Save</button>
        <a href="#notes/index" class="btn btn-large">Cancel</a>
      </form>
    </div>

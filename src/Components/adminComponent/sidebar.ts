export const sidebar = {
    render(){
        return `
            <!-- Main Sidebar Container -->
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <img src="distLayout/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: 0.8" />
                <span class="brand-text font-weight-light">ADMIN</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="distLayout/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">Hồ Hoàng Phi</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
                        <li class="nav-item">
                            <a href="#/categories/index" data-navigo class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p class="text-sm">Quản trị danh mục</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#/products/index" data-navigo class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p class="text-sm">Quản trị sản phẩm</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#/users/index" data-navigo class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p class="text-sm">Quản trị người dùng</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#/orders/index" data-navigo class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p class="text-sm">Quản trị đơn hàng</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
        `
    }
}
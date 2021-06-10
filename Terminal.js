var co = 0;
window.addEventListener("keydown", e => {
    if (co == 0) {
        document.getElementById('Terminal').innerHTML = ("Please enter the code<br>");
        co++;
    } else if (co > 10) {
        document.getElementById('Terminal').innerHTML = "<font size=10px>Please wait</font><br><font size=5px>Understanding the code</font>";
        setTimeout(function () {
            document.getElementById('Terminal').innerHTML = "This is Hacking code<br>being hacked";
        }, 3000);
    }
    if (count < codes.length && co < 10 && co > 0) {
        location.href = "#sb";
        var code = codes[count]
        document.getElementById('Terminal').append(code);
        count++;
    }else {
        count = 0;
        co ++;
    }
});
var count = 0;
var pop = [];

var codes = [
    "struct group_info init_groups = { .usage = ATOMIC_INIT(2) };", "struct group_info *groups_alloc(int gidsetsize){", "struct group_info *group_info;", "int nblocks;", "int i;",
    "if (gidsetsize <= NGROUPS_SMALL)", "group_info->blocks[0] = group_info->small_block;", "else {", "for (i = 0; i < nblocks; i++) {", "gid_t *b;", "b = (void *)__get_free_page(GFP_USER);", "if (!b)", "goto out_undo_partial_alloc;", "group_info->blocks[i] = b;", "}}return group_info;", "nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;", "/* Make sure we always allocate at least one indirect block pointer */", "nblocks = nblocks ? : 1;", "group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);", "if (!group_info)", "return NULL;", "group_info->ngroups = gidsetsize;", "group_info->nblocks = nblocks;", "atomic_set(&group_info->usage, 1);"
];